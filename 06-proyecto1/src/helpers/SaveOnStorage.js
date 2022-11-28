export const SaveOnStorage = (key, item) => {
    // Get items saved on storage
    let items = JSON.parse(localStorage.getItem(key))

    // Check if items is a array
    if (Array.isArray(items)) {
      // Add into items a new item
      items.push(item)
    } else {
      // Create array with item object
      items = [item]
    }
    localStorage.setItem(key, JSON.stringify(items))

    // Return item saved
    return item
  }