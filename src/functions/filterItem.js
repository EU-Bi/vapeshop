export function filterItem(filter, devices) {
  if (filter.type === "counts") {
    return devices.filter(
      (device) =>
        Boolean(device[filter.type.slice(0, -1)]) === filter.item.title
    );
  }
  if (filter) {
    return devices.filter(
      (device) => device[filter.type.slice(0, -1)] === filter.item
    );
  } else {
    return devices;
  }
}
