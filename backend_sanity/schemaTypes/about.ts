import { defineField, defineType } from "sanity";

export const about = defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField(
            {
                name: 'title',
                title: 'Title',
                type: 'string'
            }
        ),
        defineField(
            {
                name: 'description',
                title: 'Description',
                type: 'string'
            }
        ),
        defineField(
            {
                name: 'imgUrl',
                title: 'ImgURL',
                type: 'image',
                options: {
                    hotspot: true,
                }
            }
        )
    ]
})