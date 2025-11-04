import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// URL centralizada para fluxo de autenticação/cadastro do app
export const SIGNUP_URL = "https://app.fator5ps.shop/auth";
