export interface IUser {
    id_usuario: number,
    id_tipo_usuario: number,
    nombre: string,
    apellido: string,
    telefono: string,
    email: string,
    direccion: string,
    cod_postal: string,
    fecha_nacimiento: Date,
    fecha_ingreso: Date
}