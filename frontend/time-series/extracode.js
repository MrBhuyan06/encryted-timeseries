async function findDocumentById(idToSearch) {
  console.log();
  try {
    const document = await TimeSeriesObjectModel.TimeSeriesDataModel.findOne({
      _id: idToSearch,
    });
    console.log(document);

    if (document) {
      // Document with the specified ID found.
      console.log("Found document:", document);
    } else {
      // No document found with the specified ID.
      console.log("Document not found.");
    }
  } catch (error) {
    console.error("Error finding document by ID:", error);
  }
}
