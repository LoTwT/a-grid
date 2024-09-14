import { mount } from "@vue/test-utils"
import { AGrid, AGridItem } from ".."

describe("a-grid", () => {
  describe("grid.vue", () => {
    it("should render grid", () => {
      const wrapper = mount(AGrid)

      expect(wrapper.element.tagName).toBe("DIV")
      expect(wrapper.props()).toMatchInlineSnapshot(`
        {
          "columnGap": 16,
          "columns": 12,
          "rowGap": 16,
          "tag": "div",
        }
      `)
    })

    it("should render custom tag", () => {
      const wrapper = mount(AGrid, {
        props: {
          tag: "section",
        },
      })

      expect(wrapper.element.tagName).toBe("SECTION")
    })

    it("should generate correct internalRowGap and internalColumnGap", async () => {
      const wrapper = mount(AGrid, {
        props: {
          rowGap: 8,
          columnGap: 12,
        },
      })

      const internalRowGap = computed(() => (wrapper.vm as any).internalRowGap)
      const internalColumnGap = computed(
        () => (wrapper.vm as any).internalColumnGap,
      )

      expect(internalRowGap.value).toBe("8px")
      expect(internalColumnGap.value).toBe("12px")

      await wrapper.setProps({
        rowGap: "1rem",
        columnGap: "24px",
      })

      expect(internalRowGap.value).toBe("1rem")
      expect(internalColumnGap.value).toBe("24px")
    })
  })

  describe("grid-item.vue", () => {
    it("should render grid item", () => {
      const wrapper = mount(AGridItem)

      expect(wrapper.element.tagName).toBe("DIV")
      expect(wrapper.props()).toMatchInlineSnapshot(`
        {
          "span": 1,
          "start": "auto",
          "tag": "div",
        }
      `)
    })

    it("should render custom tag", () => {
      const wrapper = mount(AGridItem, {
        props: {
          tag: "section",
        },
      })

      expect(wrapper.element.tagName).toBe("SECTION")
    })
  })
})
