export type MenuItem = {
    id: string;
    title: string;
    description: string;
    image: string; // pode ser url ou caminho local
  };
  
  export const menuItems: MenuItem[] = [
    {
      id: 'cafe1',
      title: 'Café Expresso',
      description: 'Instruções para preparar um expresso perfeito...',
      image: '',
    },
    // ...adicione mais 8 itens
  ];