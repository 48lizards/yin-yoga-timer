export enum PoseArchetype {
  Dog = "Dog",
  Shoelace = "Shoelace",
  Saddle = "Saddle",
  Caterpillar = "Caterpillar",
  Dragonfly = "Dragonfly",
  Twist = "Twist"
}

export type Pose = {
  name: string;
  archetype: PoseArchetype;
  isSymmetrical: boolean;
};

export type SequencePose = {
  name: string;
  startTime: number;
  endTime: number;
  durationSeconds: number;
};

export type Sequence = SequencePose[];
