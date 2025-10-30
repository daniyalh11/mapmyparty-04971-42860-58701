import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, DollarSign, TrendingUp, Activity } from "lucide-react";

interface EventDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    id: string;
    title: string;
    organizer: string;
    date: string;
    status: string;
    category: string;
    ticketsSold: number;
    totalTickets: number;
    revenue: number;
    image: string;
    promoted: boolean;
  };
}

const EventDetailModal = ({ isOpen, onClose, event }: EventDetailModalProps) => {
  const enrolledPercentage = event.totalTickets > 0 
    ? Math.round((event.ticketsSold / event.totalTickets) * 100)
    : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Event Details & Analytics</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Event Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            {event.promoted && (
              <Badge className="absolute top-3 left-3 bg-accent">
                Promoted
              </Badge>
            )}
          </div>

          {/* Event Basic Info */}
          <div>
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                <div className="flex gap-2">
                  <Badge variant={event.status === "published" ? "default" : "secondary"}>
                    {event.status}
                  </Badge>
                  <Badge variant="outline">{event.category}</Badge>
                </div>
              </div>
            </div>

            <div className="grid gap-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Organizer: <span className="font-medium text-foreground">{event.organizer}</span></span>
              </div>
            </div>
          </div>

          {/* Analytics Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Tickets Sold</p>
                    <p className="text-xl font-bold">{event.ticketsSold}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Activity className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Total Capacity</p>
                    <p className="text-xl font-bold">{event.totalTickets}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-600/10">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Enrolled</p>
                    <p className="text-xl font-bold">{enrolledPercentage}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/10">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Revenue</p>
                    <p className="text-xl font-bold">₹{event.revenue.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Description Section */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Event Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                This is a sample event description. In a real application, this would contain
                detailed information about the event, including the schedule, speakers, activities,
                and any other relevant details that attendees would need to know.
              </p>
            </CardContent>
          </Card>

          {/* Enrollment Details */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Enrollment Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">People Enrolled:</span>
                  <span className="font-semibold">{event.ticketsSold} people</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Available Spots:</span>
                  <span className="font-semibold">{event.totalTickets - event.ticketsSold} remaining</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Capacity Filled:</span>
                  <span className="font-semibold">{enrolledPercentage}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${enrolledPercentage}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailModal;
