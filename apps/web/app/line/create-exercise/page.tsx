"use client"
import { Calendar } from "@web/components/shadcn/ui/calendar";
import { format } from "date-fns";
import { DateFormatter } from "react-day-picker";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@web/components/shadcn/ui/form";
import { Input } from "@web/components/shadcn/ui/input";
import { Button } from "@web/components/shadcn/ui/button";
import useLineLiffInit from "@web/hooks/useLineLiffInit";

const PFFormField = ({ label, name, type }: { label: string, name: string, type?: string}) => (
  <FormField
    name={ name }
    render={({ field }) => (
      <FormItem className="mb-4">
        <FormLabel  className="flex justify-between items-center h-5">
          <span className="block">{label}</span>
          <FormMessage />
        </FormLabel>
        <FormControl>
          <Input placeholder="shadcn" {...field} type={ type || undefined } />
        </FormControl>
      </FormItem>
    )}
  />
)

const formatCaption: DateFormatter = (yearMonth) => format(yearMonth, 'yyyy-MM')
const MSG = {
  LENGTH: '請使用 2 至 12 個字',
  NUMBER: '請輸入 0 至 999 之間的數字'
}
const formSchema = z.object({
  date: z.date(),
  exercise: z.string().min(2, MSG.LENGTH).max(12, MSG.LENGTH),
  weight: z.string().refine((val) => val !== '' && Number(val) >= 0 && Number(val) <= 999, MSG.NUMBER),
  sets: z.string().refine((val) => val !== '' && Number(val) >= 0 && Number(val) <= 999, MSG.NUMBER),
  reps: z.string().refine((val) => val !== '' && Number(val) >= 0 && Number(val) <= 999, MSG.NUMBER)
})
const onSubmit = (form: z.infer<typeof formSchema>) => {
  console.log(form);
}
export default function CreateExercise() {
  const { liff, accessToken } = useLineLiffInit()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      exercise: "",
      weight: '',
      sets: '',
      reps: ''
    },
  })
  
  return (
    <div>
      <div>
        accessToken: {accessToken}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mb-24">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <Calendar className="flex justify-center" mode="single" selected={field.value} onSelect={(date) => field.onChange(date)} formatters={{ formatCaption }}></Calendar>
              )}
            />
            <PFFormField label="訓練動作" name="exercise"/>
            <PFFormField label="重量" name="weight" type="number"/>
            <PFFormField label="組數" name="sets" type="number"/>
            <PFFormField label="次數" name="reps" type="number" />
            <br/>
            <Button type="submit" className="w-full">紀錄</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}