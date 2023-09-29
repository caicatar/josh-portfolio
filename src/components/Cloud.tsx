import * as React from "react"
import { Group, PlaneGeometry, Texture, Vector3 } from "three"
import { useFrame } from "@react-three/fiber"
import { Billboard, useTexture } from "@react-three/drei"

const CLOUD_URL = "https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png"
const plane = new PlaneGeometry()

export function Cloud({
  opacity = 2,
  speed = 0.3,
  spread = 1,
  depth = 0.3,
  segments = 55,
  texture = CLOUD_URL,
  color = "#525252",
  depthTest = true,
  fade = 1,
  material = "meshBasicMaterial",
  volume = 0.4,
  seed = 5,
  ...props
}) {
  function random() {
    var x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }

  const group = React.useRef<Group>(null!)
  const cloudTexture = useTexture(texture) as Texture
  const clouds = React.useMemo(
    () =>
      [...new Array(segments)].map((_, index) => ({
        x: spread / 2 - random() * spread,
        y: spread / 2 - random() * spread,
        scale: 0.4 + Math.sin(((index + 1) / segments) * Math.PI) * ((0.2 + random()) * 10) * volume,
        density: Math.max(0.2, random()),
        rotation: Math.max(0.002, 0.005 * random()) * speed,
      })),
    [volume, seed, spread, segments, speed],
  )
  useFrame((state) =>
    group.current?.children.forEach((cloud, index) => {
      cloud.children[0].rotation.z += clouds[index].rotation
      cloud.children[0].scale.setScalar(
        clouds[index].scale + (1 + Math.sin(state.clock.getElapsedTime() * clouds[index].density * speed)) / 2,
      )
    }),
  )
  return (
    <group {...props}>
      <group position={[(segments / 2) * depth, 0, 0]} ref={group}>
        {clouds.map((config, index) => (
          <Segment
            key={index}
            material={material}
            fade={fade}
            position={[-index * depth, config.y, config.x]}
            opacity={opacity}
            depthTest={depthTest}
            color={color}
            cloudTexture={cloudTexture}
            {...config}
          />
        ))}
      </group>
    </group>
  )
}

function Segment({ material: Material, fade, x, y, index, depth, scale, density, opacity, depthTest, color, cloudTexture, ...props }) {
  const planeRef = React.useRef()
  const vec1 = new Vector3()
  const vec2 = new Vector3()
  useFrame((state) => {
    planeRef.current.getWorldPosition(vec1)
    state.camera.getWorldPosition(vec2)
    const dist = Math.abs(vec1.distanceTo(vec2))
    planeRef.current.material.opacity = (scale / 6) * density * opacity * (dist < fade - 1 ? dist / fade : 1)
  })
  return (
    <Billboard position={[x, y, -index * depth]} {...props}>
      <mesh geometry={plane} ref={planeRef} scale={scale}>
        <Material map={cloudTexture} transparent opacity={(scale / 6) * density * opacity} depthTest={depthTest} color={color} />
      </mesh>
    </Billboard>
  )
}
