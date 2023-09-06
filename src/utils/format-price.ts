export function formatPrice(cents: number){
    const reais = (cents / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      });
      
    return reais;
}