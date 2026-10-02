// Sample accounts used when no search API is configured (e.g. the GitHub Pages demo).
const mockUsers = [
  { id: 1, full_name: "Hoang Pham", nickname: "hoangpham", avatar: "", tick: true },
  { id: 2, full_name: "Minh Anh", nickname: "minhanh.dance", avatar: "", tick: true },
  { id: 3, full_name: "Bao Tran", nickname: "baotran.cooking", avatar: "", tick: false },
  { id: 4, full_name: "Linh Nguyen", nickname: "linhnguyen.travel", avatar: "", tick: true },
  { id: 5, full_name: "Duc Le", nickname: "ducle.music", avatar: "", tick: false },
  { id: 6, full_name: "Thu Ha", nickname: "thuha.style", avatar: "", tick: false },
  { id: 7, full_name: "Quang Vo", nickname: "quangvo.tech", avatar: "", tick: true },
  { id: 8, full_name: "Mai Phuong", nickname: "maiphuong.art", avatar: "", tick: false },
];

export const searchMockUsers = (q, type = "less") => {
  const keyword = q.trim().toLowerCase();
  const results = mockUsers.filter(
    (user) => user.full_name.toLowerCase().includes(keyword) || user.nickname.toLowerCase().includes(keyword),
  );
  return type === "less" ? results.slice(0, 5) : results;
};
