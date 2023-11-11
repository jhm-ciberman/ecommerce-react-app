import ItemListContainer from "./ItemListContainer";

export default function CategoryPage() {

    const category = {
        id: 1,
        title: "Category 1",
        description: "Description 1",
        pictureUrl: "https://picsum.photos/200"
    };

    return (
        <div className="container mx-auto mt-8">
            <h1>{category.title}</h1>

            <ItemListContainer items={[]} />
        </div>
    );
}
