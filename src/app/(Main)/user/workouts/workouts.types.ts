/**
 * @interface exercise
 * @property {string} difficulty_level - How hard the exercise is
 * @property {string} exercise - Name of exercise
 * @property {id} number - Id of the workout in database
 * @property {string | null} long_yt_vid - Link of the LONG form youtube tutorial if provided, NULL if none
 * @property {string | null} secondary_muscle - The second muscle the exercise targets
 * @property {string | null} short_yt_vid - Link of the SHORT form youtube tutorial if provided, NULL if none
 * @property {string} target_muscle - Main muscle the exercise targets
 * @property {string | null} tertiary_muscle - Third muscle target, if any
 */
export interface Exercise {
  difficulty_level: string;
  exercise: string;
  id: number;
  long_yt_vid: string | null;
  secondary_muscle: string | null;
  short_yt_vid: string | null;
  target_muscle: string;
  tertiary_muscle: string | null;
}
