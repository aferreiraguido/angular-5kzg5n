export interface EmployeeFlat {
  id: number;
  managerId?: number;
  name: string;
  task?: string;
  status?: string;
  hasChildren?: boolean;
}

export const employees_flat: EmployeeFlat[] = [
  {
    id: 1,
    name: 'Suspension',
    managerId: null,
    hasChildren: true,
  },
  {
    id: 2,
    name: 'Bastidor',
    managerId: null,
    hasChildren: true,
  },
  {
    id: 3,
    name: 'Tracción',
    managerId: null,
    hasChildren: true,
  },
  {
    id: 101,
    name: 'Desmontar suspension',
    managerId: 1,
    hasChildren: true,
  },
  {
    id: 102,
    name: 'Limpieza suspension',
    managerId: 1,
  },
  {
    id: 103,
    name: 'Operaciones adicionales',
    managerId: 1,
    hasChildren: true,
  },
  {
    id: 1011,
    name: 'D.GAN Desmontar gancho de',
    task: 'Limpieza suspensión',
    status: 'Finalizado',
    managerId: 101,
  },
  {
    id: 1002,
    name: 'V.SUS Verificar',
    task: 'Verificar suspensión',
    status: 'Finalizado',
    managerId: 101,
  },
  {
    id: 201,
    name: 'Desmontar bastidor',
    managerId: 2,
    hasChildren: true,
  },
];
