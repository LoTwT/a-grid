// GlobalComponents for Volar
declare module "vue" {
  export interface GlobalComponents {
    AGrid: (typeof import("a-grid"))["AGrid"]
    AGridItem: (typeof import("a-grid"))["AGridItem"]
  }
}

export {}
