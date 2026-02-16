import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { Canvas, extend, useThree } from '@react-three/fiber'
import { Splat, Float, CameraControls, StatsGl, Effects } from '@react-three/drei'
import { TAARenderPass } from 'three/examples/jsm/postprocessing/TAARenderPass'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass'
import { useControls } from 'leva'

extend({ TAARenderPass, OutputPass })

const the_scene = 'https://huggingface.co/datasets/deep0ctave/splat_test/resolve/main/temple.splat'

export default function App() {
  const { root } = useControls({ root: { value: 'default', options: ['default'] } })
  return (
    <Canvas dpr={1.5} gl={{ antialias: false }} camera={{ position: [4, 1.5, -4], fov: 35 }}>
      <color attach="background" args={['white']} />
      <CameraControls makeDefault />
      <StatsGl />
      {root === 'default' ? <Default /> : root === 'physics' ? <Phys /> : root === 'alphahash' ? <TAA /> : <Truck />}
    </Canvas>
  )
}

const Default = () => (
  <>
    <Splat src={`${the_scene}`} position={[0, 0.25, 0]} />
  </>
)

function Post() {
  const taa = useRef(null)
  const gl = useThree((state) => state.gl)
  const scene = useThree((state) => state.scene)
  const camera = useThree((state) => state.camera)
  const controls = useThree((state) => state.controls)

  useEffect(() => {
    const oldToneMapping = gl.toneMapping
    gl.toneMapping = THREE.NoToneMapping
    if (controls) {
      const wake = () => {
        taa.current.accumulate = false
        taa.current.sampleLevel = 0
      }
      const rest = () => {
        taa.current.accumulate = true
        taa.current.sampleLevel = 2
      }
      controls.addEventListener('wake', wake)
      controls.addEventListener('sleep', rest)
      return () => {
        gl.toneMapping = oldToneMapping
        controls.removeEventListener('wake', wake)
        controls.removeEventListener('sleep', rest)
      }
    }
  }, [controls])

  return (
    <Effects disableRenderPass disableGamma>
      <tAARenderPass ref={taa} accumulate={true} sampleLevel={2} args={[scene, camera]} />
      <outputPass />
    </Effects>
  )
}
