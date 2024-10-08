import { TreeItem } from "@/types/types";

export const docsTree: TreeItem = {
	type: "folder",
	name: "src",
	children: [
		{
			type: "file",
			name: "app.tsx",
		},
		{
			type: "folder",
			name: "components",
			children: [
				{
					type: "folder",
					name: "pages",
					children: [
						{
							type: "file",
							name: "interface.ts",
						},
					],
				},
			],
		},
		{
			type: "folder",
			name: "ui",
			children: [],
		},
	],
};
