import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function PeoplePage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Thành viên</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Thêm thành viên
        </Button>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-[40vh]">
            <p className="text-muted-foreground">
              Danh sách thành viên sẽ được hiển thị ở đây (Sprint 2)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
