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

export function filterDevicesGPT(devices, filters) {
  return devices.filter(device => {
    return filters.every(filter => {
      const { item, type } = filter;

      // Функция для проверки соответствия фильтра
      const checkFilter = (filterType, filterItem, deviceProp) => {
        switch (filterType) {
          case "brands":
          case "models":
          case "types":
            return deviceProp === filterItem.title;
          case "tastes":
            return deviceProp && deviceProp.title === filterItem.title;
          // Добавьте обработку других возможных типов фильтров здесь, если есть
          default:
            return true; // Если тип неизвестен, вернем true (пропустить фильтрацию)
        }
      };

      // Проверяем наличие свойства устройства перед применением фильтра
      switch (type) {
        case "brands":
          return device.brand && checkFilter(type, item, device.brand);
        case "models":
          return device.model && device.model.title && checkFilter(type, item, device.model.title);
        case "types":
          return device.type && checkFilter(type, item, device.type);
        case "tastes":
          return device.taste && device.taste.title && checkFilter(type, item, device.taste);
        default:
          return true; // Если тип неизвестен, вернем true (пропустить фильтрацию)
      }
    });
  });
}