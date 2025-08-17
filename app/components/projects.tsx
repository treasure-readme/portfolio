  type ProjectProps = {
  media: string
  isVideo: boolean
  title: string
  shipped: boolean
  preview_description: string
  type: string
  year: string | number
  
 

}

export default function Project({ media, isVideo, title, shipped, preview_description, type, year }: ProjectProps) {

  return (
    <div className="overflow-hidden max-w-xl w-full  ">
      
      {/* Media */}
      <div className="w-full h-60 overflow-hidden mb-2">
        {isVideo ? (
          <video
            src={media}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <img
            src={media}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
        )}
      </div>

      {/* Content */}
      <div className="h-full flex flex-col justify-between space-y-3">
        {/* Title + Shipped Badge */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          {shipped && (
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-medium">
              Shipped
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm">{preview_description}</p>

        {/* Metadata */}
        <div className="text-xs text-gray-500 mt-auto">
          {type} • {year}
        </div>
      </div>
    </div>
  );
}
