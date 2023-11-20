export type Category = 'general' | 'work' | 'gym' | 'hobby';

export interface Task {
	name: string;
	done: boolean;
	category?: Category;
}
