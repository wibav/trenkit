// lib/utils.ts
/**
 * Funciones de utilidad reutilizables
 */

/**
 * Combina múltiples clase CSS
 */
export const cn = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

/**
 * Formatea un teléfono
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
};

/**
 * Valida un email
 */
export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Formatea una fecha
 */
export const formatDate = (date: Date, locale: string = "es-ES"): string => {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Capitaliza la primera letra de una palabra
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Trunca un texto a una longitud específica
 */
export const truncate = (str: string, maxLength: number): string => {
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
};
