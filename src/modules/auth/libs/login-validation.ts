import z from 'zod';

export const loginSchema = z.object({
  username: z.string().nonempty("El nombre de usuario es requerido.").min(4, "El username debe tener al menos 4 carácteres."),
  password: z.string().nonempty("La contraseña es requerida").regex(/(?=.*[a-zA-Z]+)(?=.*\d+)(?=.*[@&%$#]+)[a-zA-Z0-9@&%$#]{6,20}/g,"La contraseña debe tener al menos un número, una letra, un carácter espcial, como mínimo 6 carácteres y máximo 20.")
})

export type LoginFormValues = z.infer<typeof loginSchema>;