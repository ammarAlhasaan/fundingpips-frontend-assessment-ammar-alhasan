export default function StocksLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
      {children}
    </div>
  );
}
