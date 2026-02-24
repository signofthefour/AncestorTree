import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TreePage() {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>🌳 Cây Gia Phả</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-[60vh] border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">
              Tree view sẽ được hiển thị ở đây (Sprint 2)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
