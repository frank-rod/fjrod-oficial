/**
 * Función para realizar scroll suave a un elemento por su ID
 * @param elementId - ID del elemento al que queremos hacer scroll
 * @param event - Evento opcional (para prevenir comportamiento por defecto)
 */
export const scrollToElement = (elementId: string, event?: React.MouseEvent) => {
  if (event) {
    event.preventDefault();
  }
  
  const element = document.getElementById(elementId);
  if (element) {
    // Pequeño offset para que no quede exactamente en el borde superior
    const headerHeight = 80; // Altura aproximada del header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}; 