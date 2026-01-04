export default function Filters({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
}) {
  return (
    <div>
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="electronics">Electronics</option>
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <button
        onClick={() => {
          setSearch("");
          setCategory("");
          setSort("");
        }}
      >
        Clear
      </button>
    </div>
  );
}
