export function useTreeTraversal(root, parentId, data) {
  if (root.id === parentId && root.isDir) {
    root.children.unshift(data);
    return root;
  }
  const latest = root.children.map((child) =>
    useTreeTraversal(child, parentId, data)
  );
  return { ...root, children: latest };
}
