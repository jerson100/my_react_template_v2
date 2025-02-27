import { useForm } from "react-hook-form"
import { LoginFormValues, loginSchema } from "@auth/libs/login-validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router"

export const useSignIn = () => {
  const navigate = useNavigate();
  const instance = useForm<LoginFormValues>({
    mode: "all",
    defaultValues:{
      username:"",
      password:""
    },
    resolver: zodResolver(loginSchema)
  })
  const handleSubmit = (data:LoginFormValues) => {
    //alert(JSON.stringify(data, null, 4));
    navigate("/")
  }
  return {instance, handleSubmit}
}