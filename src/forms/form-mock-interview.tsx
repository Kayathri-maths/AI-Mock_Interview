import { Headings } from "@/components/headings";
import { Button } from "@/components/ui/button";
import { CustomBreadCrumb } from "@/components/ui/custom-bread-crumb";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Interview } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
interface FormMockInterview {
  initialData: Interview | null;
}

const formSchema = z.object({
  position: z
    .string()
    .min(1, "Position is required")
    .max(100, "Position must be 100 characters or less"),
  description: z.string().min(10, "Description is required"),
  experience: z.coerce
    .number()
    .min(0, "Experience cannot be empty or negative"),
  techStack: z.string().min(1, "Tech stack must be at least a character"),
});

type FormData = z.infer<typeof formSchema>;

export const FormMockInterview = ({ initialData }: FormMockInterview) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {},
  });
  const { isValid, isSubmitting } = form.formState;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { userId } = useAuth();

  const title = initialData
    ? initialData.position
    : "Create a new mock interview";
  const breadCrumPage = initialData ? initialData?.position : "Create";
  const actions = initialData ? "Save Changes" : "Create";
  const toastMessage = initialData
    ? { title: "Updated..!", description: "Changes saved successfully..." }
    : { title: "Created..!", description: "New Mock Interview Created..." };

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="w-full flex-col space-y-4">
      <CustomBreadCrumb
        breadCrumbpage={breadCrumPage}
        breadCrumbItems={[{ label: "Mock Interviews", link: "/generate" }]}
      />
      <div className="mt-4 flex flex-col items-start justify-between w-full">
        <Headings title={title} isSubHeading />
        {initialData && (
          <Button size={"icon"} variant={"ghost"}>
            <Trash2 className="text-red-500 min-w-4 min-h-4" />
          </Button>
        )}
        <Separator className="my-4" />

        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full p-8 rounded-lg flex-col flex items-start justify-start gap-6 shadow"
          >
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem className="w-full space-y-4">
                  <div className="w-full flex items-center justify-between">
                    <FormLabel>Job Role / Job Position</FormLabel>
                    <FormMessage className="tetx-sm" />
                  </div>

                  <FormControl>
                    <Input
                      className="h-12"
                      disabled={isLoading}
                      placeholder="eg:- Full Stack Developer, Data Scientist, etc."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full space-y-4">
                  <div className="w-full flex items-center justify-between">
                    <FormLabel>Job Description</FormLabel>
                    <FormMessage className="tetx-sm" />
                  </div>

                  <FormControl>
                    <Textarea
                      className="h-12"
                      disabled={isLoading}
                      placeholder="eg:- Job description for the position"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem className="w-full space-y-4">
                  <div className="w-full flex items-center justify-between">
                    <FormLabel>Years of Experience</FormLabel>
                    <FormMessage className="tetx-sm" />
                  </div>

                  <FormControl>
                    <Input
                      className="h-12"
                      disabled={isLoading}
                      placeholder="eg:- 2 years, 5 years, etc."
                      type="number"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="techStack"
              render={({ field }) => (
                <FormItem className="w-full space-y-4">
                  <div className="w-full flex items-center justify-between">
                    <FormLabel>Tech Stacks</FormLabel>
                    <FormMessage className="tetx-sm" />
                  </div>

                  <FormControl>
                    <Textarea
                      className="h-12"
                      disabled={isLoading}
                      placeholder="eg:- JavaScript, React, Node.js, etc."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="w-full flex items-center justify-end space-x-4">
              <Button type="reset" size={"sm"} variant={"outline"}>
                Reset
              </Button>
              <Button type="submit" size={"sm"}>
                {actions}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
