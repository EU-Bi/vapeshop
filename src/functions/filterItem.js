export function filterItem(filter, devices) {
  if (filter.type === "counts") {
    return devices.filter(
      (device) =>
        Boolean(device.taste.count) === filter.item.title
    );
  }
  if (filter.type === "models") {
    return devices.filter(
      (device) => device[filter.type.slice(0, -1)].title === filter.item.title
    );
  }
  if (filter.type === "tastes") {
    return devices.filter((device) => {
      return device.taste.title === filter.item.title;
    });
  }
  if (filter) {
    return devices.filter(
      (device) => device[filter.type.slice(0, -1)] === filter.item.title
    );
  } else {
    return devices;
  }
}
