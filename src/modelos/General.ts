export interface Estudiante {
  id: string;
  nombre: string;
  email: string;

  // credenciales (pueden guardarse en secure store)
  usuario: string;
  passwordHash: string; // nunca guardes password directo
  avatarPath: string;

  carrera: Carrera | null; // estudiante puede o no haber elegido carrera

  progresoGeneral: number; // porcentaje basado en todos los cursos
}

export interface Carrera {
  id: string;
  nombre: string;
  descripcion?: string;
  cursos: Curso[];
}

export interface Curso {
  id: string;
  nombre: string;
  descripcion?: string;
  imagenPath: string; // miniatura del curso

  temas: Tema[];

  progreso: number; // avance en %
}

export interface Tema {
  id: string;
  titulo: string;
  iconoPath: string; // ícono pastel, empresarial

  completado: boolean;

  // opcionales para contenido
  videoUrl?: string;
  pdfUrl?: string;
  descripcion?: string;
}
