import mongoose from 'mongoose';

/**
 * Returns a string reporting no <model.name> with <id>
 * @param model The model you want to use its name
 * @param id The document id you want to use
 */
export default function (
  model: mongoose.Model<mongoose.Document>,
  id: string,
): string {
  return `No ${model.modelName.toUpperCase()} with id ${id}`;
}
