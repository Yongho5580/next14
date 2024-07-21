export default function Page({ params: { id } }: { params: { id: string } }) {
  return <h1>Movie {id}!</h1>;
}
