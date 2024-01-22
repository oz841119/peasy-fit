type ThirdParty = 'line' | 'facebook' | 'google'
type TrainingTag = { label: string, id: string}
type Training = {
  id: string,
  name: string,
  weight: number,
  sets: number,
  reps: number,
  tags: Array<TrainingTag>
}