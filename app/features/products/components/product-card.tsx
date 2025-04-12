import { Link } from "react-router";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";

interface ProductCardProps {
  productId: number;
  productName: string;
  description: string;
  reviewCount: string;
  viewCount: string;
  upvoteCount: string;
}

export function ProductCard({
  productId,
  productName,
  description,
  reviewCount,
  viewCount,
  upvoteCount,
}: ProductCardProps) {
  return (
    <Link to={`/products/${productId}`} className="block">
      <Card className="w-full flex flex-row items-center justify-between bg-transparent hover:bg-card/50">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight text-nowrap">
            {productName}
          </CardTitle>
          <CardDescription className="w-[220%]">{description}</CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <MessageCircleIcon className="w-4 h-4" />
              <p className="text-sm font-medium">{reviewCount}</p>
            </div>
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <EyeIcon className="w-4 h-4" />
              <p className="text-sm font-medium">{viewCount}</p>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button variant="outline" className="flex h-14">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>{upvoteCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
