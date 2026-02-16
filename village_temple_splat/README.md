# village_temple_splat

A minimal 3D scene that renders a `.splat` file using the `<Splat />` component from [`@react-three/drei`](https://github.com/pmndrs/drei), built with Vite and deployed via GitHub Pages.

### 🔗 Live Demo  
[https://deep0ctave.github.io/village_temple_splat/](https://deep0ctave.github.io/village_temple_splat/)

---

## 📦 Tech Stack
- [Vite](https://vitejs.dev/) for fast builds
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for 3D rendering
- [`@react-three/drei`](https://github.com/pmndrs/drei) `<Splat />` for loading Gaussian splats
- Hosted `.splat` file on Hugging Face

---

## 🧩 Usage

```jsx
import { Splat } from '@react-three/drei'

<Splat src="https://huggingface.co/datasets/deep0ctave/village-temple/resolve/main/temple.splat" />
```
No manual fetch needed — Splat handles it internally.

## 🚀 Commands

npm install       # install dependencies
npm run dev       # run dev server
npm run build     # build for production

MIT © deep0ctave

