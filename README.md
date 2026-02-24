# 🌳 AncestorTree

> **Gia Phả Điện Tử - Chi tộc Đặng Đình, Thạch Lâm, Hà Tĩnh**

Phần mềm quản lý gia phả điện tử giúp gìn giữ và truyền thừa thông tin dòng họ qua các thế hệ.

## ✨ Tính năng

- 🌲 **Cây gia phả trực quan** - Sơ đồ phả hệ tương tác
- 👥 **Quản lý thành viên** - Hồ sơ cá nhân chi tiết
- 📅 **Lịch cúng lễ** - Theo dõi ngày giỗ, lễ tết
- 🔍 **Tìm kiếm** - Tra cứu nhanh theo tên, đời, chi nhánh
- 📱 **Responsive** - Tương thích mobile/tablet/desktop

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16, React 19, Tailwind CSS 4 |
| UI Components | shadcn/ui, Radix UI |
| Backend | Supabase (PostgreSQL, Auth, Storage) |
| Deployment | Vercel + Supabase Cloud |

## 🚀 Quick Start

```bash
# Clone repo
git clone https://github.com/user/AncestorTree.git
cd AncestorTree

# Install dependencies
cd frontend && pnpm install

# Setup environment
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
AncestorTree/
├── docs/                    # SDLC Documentation (LITE tier)
│   ├── 00-foundation/       # Vision, requirements
│   ├── 01-planning/         # Sprints, roadmap
│   ├── 02-design/           # Architecture, UI/UX
│   ├── 04-build/            # Implementation guides
│   └── 05-test/             # Test plans
├── frontend/                # Next.js application
│   ├── src/app/             # App router pages
│   ├── src/components/      # React components
│   ├── src/lib/             # Utilities, Supabase client
│   └── supabase/            # Database migrations
└── README.md
```

## 📖 Documentation

See [docs/README.md](./docs/README.md) for full documentation.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

MIT License - see [LICENSE](./LICENSE) for details.

---

*"Gìn giữ tinh hoa - Tiếp bước cha ông"* 🙏
