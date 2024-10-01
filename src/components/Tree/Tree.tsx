import { TreeNode } from '../TreeNode/TreeNode'

export const Tree = ({ data }: object) => {
  return (
    <ul>
        <TreeNode node={data}/>
    </ul>
  )
}
