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
  detalle?: string;
  ciclos: Ciclo[];
}
export interface Ciclo {
  id: string;
  numero: string; // 1-7
  cursos: Curso[];
}

export interface Curso {
  id: string;
  nombre: string;
  descripcion?: string;
  progreso?: number;
  unidades: Unidad[];
}

export interface Unidad {
  id: string;
  numero: string; // 1-3
  nombre: string;
  descripcion?: string;
  secciones: Tema[];
}

export interface Tema {
  id: string;
  titulo: string;
  iconoPath?: string; // ícono pastel, empresarial
  completado: boolean;
  // opcionales para contenido
  videoUrl?: string;
  pdfUrl?: string;
  descripcion?: string;
}
