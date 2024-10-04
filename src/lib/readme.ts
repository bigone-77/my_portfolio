interface IReadmeProps {
  repoName: string;
}

export async function getReadme({ repoName }: IReadmeProps) {
  const res = await fetch(`/api/github?repoName=${repoName}`, {
    next: {
      tags: ['readme', repoName],
    },
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
