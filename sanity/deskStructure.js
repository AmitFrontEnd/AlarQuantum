// sanity/deskStructure.js

export const structure = (S) =>
  S.list()
    .title('Content Manager')
    .items([
      // 📁 HOMEPAGE
      S.listItem()
        .title('🏠 Homepage')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
        ),

      S.divider(),

      // 📄 TECHNOLOGY PAGE
      S.listItem()
        .title('🛠️ Technology Page')
        .child(
          S.document()
            .schemaType('technologyPage')
            .documentId('technologyPage')
        ),

      S.divider(),

      // 📄 ABOUT PAGE (will add later)
      S.listItem()
        .title('📄 About Page')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),

      // 📄 SOLUTIONS PAGE (will add later)
      S.listItem()
        .title('💼 Solutions Page')
        .child(
          S.document()
            .schemaType('solutionsPage')
            .documentId('solutionsPage')
        ),
      // After Solutions Page, add:
      S.divider(),
      S.listItem()
        .title('🎓 Academy Page')
        .child(
          S.document()
            .schemaType('academyPage')
            .documentId('academyPage')
        ),
        // After Academy Page, add:
S.divider(),
S.listItem()
  .title('🔬 Research Page')
  .child(
    S.document()
      .schemaType('researchPage')
      .documentId('researchPage')
  ),

      // 📄 CONTACT PAGE (will add later)
      S.listItem()
        .title('📞 Contact Page')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
        ),
    ])