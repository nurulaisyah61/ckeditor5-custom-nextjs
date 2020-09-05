import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('../components/Editor'), {
  ssr: false
})
const Index = () => {
  return (
    <div>
      <h3>CKEditor 5 Custom + Next.js</h3>
      <Editor />
    </div>
  )
}

export default Index