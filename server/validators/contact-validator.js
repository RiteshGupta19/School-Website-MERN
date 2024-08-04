const z = require("zod")

const contactschema = z.object({
  name:z
  .string({required_error:"name is required"})
  .trim()
  .min(3,{message:"name must be at least of 3 characters"})
  .max(255,{message:"name must not be more than 255 characters"}),
  email:z
  .string({required_error:"email is required"})
  .trim()
  .email({message:"Invalid email address"})
  .min(3,{message:"email must be at least of 3 characters"})
  .max(255,{message:"email must not be more than 255 characters"}),
  subject:z
  .string({required_error:"subject is required"})
  .trim()
  .min(3,{message:"subject must be at least of 3 characters"})
  .max(2000,{message:"subject must not be more than 255 characters"}),
  comment:z
  .string({required_error:"comment is required"})
  .trim()
  .min(0,{message:"comment must be at least of 3 characters"})
  .max(2000,{message:"comment must not be more than 255 characters"}),
})

module.exports = contactschema;