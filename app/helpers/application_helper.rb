module ApplicationHelper
  def include_class
    if controller_name == 'app' && action_name == 'index'
      'page-full-width'
    end
  end
end
