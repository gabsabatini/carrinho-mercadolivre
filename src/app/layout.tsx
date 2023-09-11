export const metadata = {
  title: 'Carrinho Compras',
  description: 'Um clone do carrinho de compras do Mercado Livre',
}

import './style.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
