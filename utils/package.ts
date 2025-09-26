import { IconName } from "components/Common/Icons";
import { IPackageActivity } from "interface/package.interface";

export const getPackageActivityText = (packageActivity: IPackageActivity) => {
  const {
    package_activity_time_day,
    package_activity_time_hours,
    package_activity_time_minutes,
  } = packageActivity;

  let activityText = "";

  if (
    !package_activity_time_day &&
    !package_activity_time_hours &&
    !package_activity_time_minutes
  ) {
    return "ไม่จำกัดเวลา";
  }

  if (package_activity_time_day) {
    activityText += `${package_activity_time_day} วัน`;
  }
  if (package_activity_time_hours) {
    activityText += ` ${package_activity_time_hours} ชั่วโมง`;
  }
  if (package_activity_time_minutes) {
    activityText += ` ${package_activity_time_minutes} นาที`;
  }

  return activityText;
};

export const getLocationsIconById = (placesId: string): IconName => {
  if (placesId === "3") {
    return "MonitorOutline";
  }
  return "LocationsFill";
};
