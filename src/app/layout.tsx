export const metadata = {
  title: 'Carrinho Compras',
  description: 'Carrinho de compras com busca de produtos do Mercado Livre',
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
