const hasProductInCategory = (inputCategory, productCategories) => {
    const inputcategoryArr = typeof inputCategory === 'string' ? [inputCategory] : inputCategory;
    const inputcategoryArrLowerCase = inputcategoryArr.toString().toLowerCase().split(',');
    let hasSameCategory = false;
    productCategories.forEach((productCategory) => {

    })

    for(productCategory of productCategories) {
        if(inputcategoryArrLowerCase.includes(productCategory.toLowerCase())) {
            hasSameCategory = true;
            break;
        }
    }

    return hasSameCategory;
}

module.exports = {
    hasProductInCategory
}